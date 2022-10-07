<form action="https://www.example.com/payment/success/" method="post" >
    <script
        src="https://checkout.razorpay.com/v1/checkout.js"
        data-key="rzp_test_h9c5Rqfc9FQAPr" // Enter the Test API Key ID generated from Dashboard → Settings → API Keys
        data-amount= "25000" Amount is in currency subunits. Hence, 29935 refers to 29935 paise or ₹299.35.
        data-currency="INR"// You can accept international payments by changing the currency code. Contact our Support Team to enable International for your account9
        
        data-name="Medbuddy"
        data-description="MedBuddy one place for all your health needs"
        data-image="https://example.com/your_logo.jpg"
        data-prefill.name="Gaurav Kumar"
        data-prefill.email="gaurav.kumar@example.com"
        data-theme.color="#F37254"
    ></script>
    <!-- <script src="c.js"></script> -->
    <input type="hidden" custom="Hidden Element" name="hidden">
    </form>