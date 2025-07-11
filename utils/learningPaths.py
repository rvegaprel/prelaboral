import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("./utils/prelaboral-435211-edc2bbcab539.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

learning_path_data = {
  "id": "tech-path-1",
  "name": "Ruta Tecnológica",
  "areas": [
    { "id": "tecnologia", "order": 1, "name": "Tecnología" },
    { "id": "ingenieriaSoftware", "order": 2, "name": "Ingeniería de Software" },
    { "id": "cienciaDatos", "order": 3, "name": "Ciencia de Datos" },
    { "id": "superpoderReuniones", "order": 4, "name": "Superpoder de abrir y cerrar una reunión" }
  ]
}

superpoderes_path = {
  "id": "superpoderes",
  "name": "Ruta de Superpoderes",
  "areas": [
    { "id": "superpoderReuniones", "order": 4, "name": "Superpoder de abrir y cerrar una reunión" }
  ]
}


doc_ref = db.collection("learningPaths").document("tech-path-1")
doc_ref.set(learning_path_data)
doc_ref = db.collection("learningPaths").document("superpoderes")
doc_ref.set(superpoderes_path)
print("Ruta de aprendizaje subida!")