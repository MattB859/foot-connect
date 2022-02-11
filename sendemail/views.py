# sendemail/views.py
from django.core.mail import send_mail
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from django.conf import settings
from .forms import ContactForm


# Custom coded by the developer
def contact_view(request):
    if request.method == 'POST':

        form = ContactForm(request.POST)
        # check if data from the form is clean
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']

            data = {
                'name': name,
                'email': email,
                'message': message
            }
            message = '''
            New message: {}

            From: {}
            '''.format(data['message'], data['email'])
            send_mail(data['name'], message, settings.DEFAULT_FROM_EMAIL, ['mattburrellmusic@gmail.com'])

            return redirect('success')
    return render(request, "contacts/email.html", {})


def success_view(request):
    """ A view to return the success page """

    template = "contacts/success.html"
    return render(request, template)
