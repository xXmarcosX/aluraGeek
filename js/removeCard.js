import { conectaApi } from "./conectaApi.js";

document.addEventListener("click", async (event) => {
  if (event.target.matches(".btn-excluir, .btn-excluir *")) {
    const button = event.target.closest(".btn-excluir");
    const cardElement = button.closest(".main__produtos__card");
    const itemId = button.getAttribute("data-id");
    
    await conectaApi.deleteProduto(itemId);

    cardElement.remove();
  }
});
