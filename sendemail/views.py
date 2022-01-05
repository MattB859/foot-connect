# sendemail/views.py
from django.core.mail import send_mail, BadHeaderError
from django.shortcuts import render, redirect
from .forms import ContactForm


def contact_view(request):
    if request.method == 'POST':
        form = ContactForm()
    else:
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            emailaddress = form.cleaned_data['emailaddress']
            message = form.cleaned_data['message']
            try:
                send_mail(name, message, emailaddress, ['gmail'])
            except BadHeaderError:
                return redirect('success')
    return render(request, "contacts/email.html", {'form': form})


def success_view(request):

    """
    A view to return the success page
    """

    return render(request, "contacts/success.html")
