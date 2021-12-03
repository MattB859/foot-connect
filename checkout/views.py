from django.shortcuts import render, redirect, reverse
from django.contrib import messages

from .forms import OrderForm


def checkout(request):
    bag = request.session.get('bag', {})
    if not bag:
        messages.error(request, "There's nothing in your bag at the moment")
        return redirect(reverse('products'))

    order_form = OrderForm()
    template = 'checkout/checkout.html'
    context = {
        'order_form': order_form,
        'stripe_public_key': 'pk_test_51JxoVWAuV8rhSjQvoHybIzlrMFkp1SmVuuOJKRS4izZ9fbnLj6YpE8REz8P2PNUuGpLiWZEKBeDYTto0nOWYx6J700XHKTINOr',
        'client_secret': 'sk_test_51JxoVWAuV8rhSjQvMvUIb7hnPEHtWsjQvmyYczWltRwl4JOgAafaJhT2qTCwjI0lNxXfAFh17iNuQr4WvJSxYH0z0059ThRXkh',
    }

    return render(request, template, context)
