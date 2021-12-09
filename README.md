## Bug

-  ### Bug Fix
<fieldset class="px-3">
<legend class="fieldset-label small text-black px-2 w-auto">Payment</legend>
<!-- A Stripe card element will go here -->
<div class="mb-3" id="card-element"></div>

    <!-- Used to display form errors -->
<div class="mb-3 text-danger" id="card-errors" role="alert"></div>
</fieldset>

-  ### Bug Fix

<fieldset class="px-3">
<legend class="fieldset-label small text-black px-2 w-auto">Payment</legend>
<!-- A Stripe card element will go here -->
<div class="mb-3" id="card-element"></div>
<!-- Used to display form errors -->
<div class="mb-3 text-danger" id="card-errors" role="alert"></div>
<!-- Pass the client secret to the view so we can get the payment intent id -->
<input type="hidden" value="{{ client_secret }}" name="client_secret"></fieldset>