function status(request, response) {
  response.status(200).json({ mensagem: "Status da pagina é esse" });
}

export default status;
