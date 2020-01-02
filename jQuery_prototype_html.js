//метод возвращает или изменяет html-содержимое выбранных элементов

jQuery.prototype.html = function(html_content){
    if (html_content === undefined)

    {
    this.each(element => html_content = element.innerHTML);
    return html_content;
    }

    else

    {
    this.each(element => element.innerHTML = html_content);
    return this;
    }
}
