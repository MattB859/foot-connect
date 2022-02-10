from django import forms


class ContactForm(forms.Form):
    """ email form """

    name = forms.CharField(required=True)
    email = forms.EmailField(required=True)
    message = forms.CharField(widget=forms.Textarea, required=True)
