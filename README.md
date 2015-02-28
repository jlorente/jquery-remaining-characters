jQuery Remaining Characters
===========================

Jquery plugin that adds a remaining character counter to text inputs and textareas.

## Usage

Add the maxlength attribute to the text input or textarea:
```html
<input type="text id="my-input" maxlength="400"/>
```

And just call:

```javascript
$("#my-input").remainingCharacters();
```

or with options

```javascript
$("#my-input").remainingCharacters({
    label: {
        tag: 'p',
        class: 'char-counter',
        id: 'char-counter-count',
        errorClass: 'error-class'
    },
    text: '{n}'
});
```

The counter is updated using the keyup event. The error class is aplyed to the label if the counter reaches an invalid value.

### Options

Option | Type | Default | Description
------ | ---- | ------- | -----------
label | object |  | Options related to the label container
label.tag | string | 'p' | Html tag of the label
label.id | string | null | Id of the label
label.class | string | 'char-counter' | Class of the label
label.invalidClass | string | 'error-class' | Class to add to the label if the counter reaches an invalid number
text | string | '{n}' | Text to display inside the label where {n} is the placeholder of the remaining characters counter. i.e.: '{n} characters remaining'

Copyright 2015 José Lorente Martín. See LICENCE for details.