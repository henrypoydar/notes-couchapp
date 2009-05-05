function(doc) {
  if(doc.type == 'Note') {
    emit(doc.title, {
      title : doc.title,
      body : doc.body,
      created_at : doc.created_at
    });
  }
};