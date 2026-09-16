document.querySelector('#tagForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const tag = document.querySelector('input[name = "tag"]').value;
    const tagContent = document.querySelector('input[name = "tagContent"]').value;
    const attribute = document.querySelector('input[name = "attribute"]').value;
    const attributeValue = document.querySelector('input[name = "attributeValue"]').value;
    const newElement = document.createElement(tag);

        if (tagContent) {
            newElement.textContent = tagContent;
        }

        if (attribute && attributeValue) {
            newElement.setAttribute(attribute, attributeValue);
        }

        document.body.append(newElement);
});
