package com.calculator.calculator.dataController;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.Query.Direction;
import com.google.firebase.cloud.FirestoreClient;

@Service
public class FirebaseService {

    public List<Schema> getHistoryDetails() throws Exception {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        CollectionReference collectionReference = dbFirestore.collection("history");
        // DocumentSnapshot lastDocument = collectionReference
        //         .orderBy("id", Direction.DESCENDING)
        //         .limit(1)
        //         .get()
        //         .get()
        //         .getDocuments()
        //         .get(0);

        // System.out.println(lastDocument.getId());        
        ApiFuture<QuerySnapshot> future = collectionReference.orderBy("id", Direction.DESCENDING).get();
        // System.out.println(future.get().getDocuments().get(0).get("id"));
        List <Schema> list = new ArrayList<Schema>();
        for(QueryDocumentSnapshot element : future.get().getDocuments()) {            
            list.add(element.toObject(Schema.class));
        }
        return list;
    }

    public void addHistoryDetails(Schema schema) throws Exception {
        Firestore dbFirestore = FirestoreClient.getFirestore(); 
        CollectionReference collectionReference = dbFirestore.collection("history");        
        // DocumentSnapshot lastDocument = collectionReference.orderBy("id", Direction.DESCENDING)
        //         .limit(1)
        //         .get()
        //         .get()
        //         .getDocuments()
        //         .get(0);
        // collectionReference.document(Long.toString(Long.parseLong(lastDocument.getId()) + 1)).set(schema);
        // collectionReference.document("3").set(schema);
        collectionReference.add(schema);
    }
}