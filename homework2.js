function jQuery(selector, context = document) {
  this.elements = Array.from(context.querySelectorAll(selector))
  return this
}

jQuery.prototype.each = function (fn) {
  this.elements.forEach((element, index) => fn.call(element, element, index))
  return this
}

jQuery.prototype.text = function (text) {
  this.each((element) => element.innerText = text)
}

const $ = (e) => new jQuery(e)

$('.example').text('Homework2')
