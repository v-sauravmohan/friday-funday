import { Injectable, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

export interface Group {
  doc_id?: string;
  group_name: string;
  no_of_redeems: number;
  points_scored: number;
  secret_group_id: string;
}

export interface PointKey {
  doc_id?: string;
  points: number;
  key: string;
  redeemed: boolean;
}

export interface RedeemStatus {
  wasRedeemSucess: boolean;
  pointsKey: string;
  groupName: string;
  points: number;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService implements OnDestroy {

  redeemed: BehaviorSubject<RedeemStatus> = new BehaviorSubject({
    wasRedeemSucess: false,
    pointsKey: '',
    groupName: '',
    points: 0
  });

  constructor(private fireStore: AngularFirestore) { }

  /**
   * Retereves groups
   * @returns  Group Data as Array of objects.
   */
  retereveGroups() {
    try {
      return this.fireStore.firestore.collection('groups').get().then((querySnapshot) => {
        const groups: Group[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const group: Group = {
            doc_id: doc.id,
            group_name: data.group_name,
            no_of_redeems: data.no_of_redeems,
            points_scored: data.points_scored,
            secret_group_id: data.secret_group_id
          };
          groups.push(group);
        });
        return groups;
      });
    } catch (error) {
      console.log('Error while trying to retrieve group data DB:', error);
    }
  }

  /**
   * Retereves point keys
   * @returns  Point Keys as Array of objects.
   */
  reterevePointKeys() {
    try {
      return this.fireStore.firestore.collection('pointkeys')
        .get().then((querySnapshot) => {
          const pointKeys: PointKey[] = [];
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            const pointKey: PointKey = {
              doc_id: doc.id,
              points: data.points,
              key: data.key,
              redeemed: data.redeemed
            };
            pointKeys.push(pointKey);
          });
          return pointKeys;
        });
    } catch (error) {
      console.log('Error while trying to retrieve ponits data from DB:', error);
    }
  }

  /**
   * Updates DB value base on parameters
   * @param collectionId
   * @param documentID
   * @param valuesToBeUpdated
   */
  updateFirestoreValue(collectionId: string, documentID: string, valuesToBeUpdated: any) {
    try {
      const collectionReference = this.fireStore.firestore.collection(collectionId);
      collectionReference.doc(documentID).update(valuesToBeUpdated);
    } catch (error) {
      console.log('Error while trying to update DB:', error);
    }
  }

  /**
   * Redeems points with key
   * @param secretGroupID
   * @param pointKey
   * @returns
   */
  redeemPointsWithKey(secretGroupID: string, pointKey: string) {
    return this.retereveGroups()
      .then((groups) => {
        if (groups.length) {
          const groupObject = groups.find(group => group.secret_group_id === secretGroupID);
          if (groupObject) {
            this.reterevePointKeys()
              .then((pointKeys) => {
                const pointKeyObject = pointKeys.find(IpointKey => IpointKey.key === pointKey && !IpointKey.redeemed);
                if (pointKeyObject) {
                  const groupTotalPoints = groupObject.points_scored + pointKeyObject.points;
                  const numberOfRedeems = groupObject.no_of_redeems + 1;
                  // Update Point Keys Collection on DB
                  this.updateFirestoreValue(
                    'pointkeys',
                    pointKeyObject.doc_id,
                    { redeemed: true });
                  // Update Groups collection on DB
                  this.updateFirestoreValue(
                    'groups',
                    groupObject.doc_id,
                    {
                      no_of_redeems: numberOfRedeems,
                      points_scored: groupTotalPoints,
                    }
                  );
                  const redeemStatus: RedeemStatus = {
                    wasRedeemSucess: true,
                    pointsKey: pointKeyObject.key,
                    groupName: groupObject.group_name,
                    points: pointKeyObject.points
                  };
                  this.redeemed.next(redeemStatus);
                } else {
                  console.log(pointKey + ' already redeemed or not found');
                }
              });
          } else {
            console.log('Group Id is Wrong, Please check Group Id');
          }
        }
      });
  }

  /**
   * Adds document to firestore
   * @param collectionId 
   * @param valuesToBeUpdated 
   */
  addDocumentToFirestore(collectionId: string, valuesToBeAdded: any) {
    try {
      const collectionReference = this.fireStore.firestore.collection(collectionId);
      collectionReference.add(valuesToBeAdded);
      console.log('successfully added', valuesToBeAdded, 'to', collectionId);
    } catch (error) {
      console.log('Error while trying to add DB:', error);
    }
  }

  /**
   * Gets groups and dynamically updates on change in DB
   * @returns  array of group objects
   */
  getGroups() {
    return this.fireStore.collection('groups').valueChanges();
  }

  /**
   * on destroy
   */
  ngOnDestroy() {
    this.redeemed.complete();
  }
}
