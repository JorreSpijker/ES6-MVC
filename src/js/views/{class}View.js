import { elements } from "./base";

export const renderListItem = (item) => {

    const markup = `<div>${item.title}</span>`;
    elements.item.subitem.insertAdjacentHTML("afterbegin", markup);
};

export const deleteItem = id => {
    const item = document.querySelector(`[data-id="${id}"]`);
    item.parentElement.removeChild(item);
};