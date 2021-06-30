import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({ ...doc.data(), id: doc.id })
                });
                setDocs(documents);

                console.log(documents);
            });

        // return () => unsub();
    }, [collection])

    return { docs };
}

const deleteFile = (id) => {
    const collectionRef = projectFirestore.collection('images');

    collectionRef.doc(id).delete()
        .then(() => { console.log(`'${id}' deleted`) })
        .catch((err) => { console.log('Error: ', err) })
}

export { useFirestore, deleteFile };