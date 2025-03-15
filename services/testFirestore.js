import { db } from './firebaseConfig';

async function testarFirestore() {
  try {
    // Criar referência para a coleção "testes"
    const ref = db.collection('testes');

    // Adicionar um documento de teste
    const docRef = await ref.add({
      nome: 'Teste',
      criadoEm: new Date(),
    });

    console.log('Documento adicionado com ID:', docRef.id);

    // Buscar os documentos da coleção "testes"
    const snapshot = await ref.get();
    snapshot.forEach(doc => {
      console.log('ID:', doc.id, '=>', doc.data());
    });

  } catch (error) {
    console.error('Erro ao testar Firestore:', error);
  }
}

// Executa o teste
testarFirestore();
