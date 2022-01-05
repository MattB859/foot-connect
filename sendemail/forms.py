from django import forms


class ContactForm(forms.Form):
    name = forms.CharField(required=True)
    emailaddress = forms.EmailField(required=True)
    message = forms.CharField(widget=forms.Textarea, required=True)
