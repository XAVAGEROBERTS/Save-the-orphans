import React, { useState } from 'react';

const DonationForm = () => {
  const [donationAmount, setDonationAmount] = useState(250);
  const [customAmount, setCustomAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' or 'mobile'
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    // Card Info
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    // Mobile Money Info
    mobileProvider: 'mtn',
    mobileNumber: ''
  });

  const presetAmounts = [25, 50, 100, 250, 500];
  const mobileProviders = [
    { value: 'mtn', label: 'MTN Mobile Money' },
    { value: 'airtel', label: 'Airtel Money' },
    { value: 'orange', label: 'Orange Money' },
    { value: 'vodacom', label: 'Vodacom M-Pesa' },
    { value: 'safaricom', label: 'Safaricom M-Pesa' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(' ') : value;
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + (v.length > 2 ? '/' + v.substring(2, 4) : '');
    }
    return v;
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setFormData({
      ...formData,
      cardNumber: formatted
    });
  };

  const handleExpiryDateChange = (e) => {
    const formatted = formatExpiryDate(e.target.value);
    setFormData({
      ...formData,
      expiryDate: formatted
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate common fields
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert('Please fill in all required personal information');
      setIsLoading(false);
      return;
    }

    if (donationAmount <= 0) {
      alert('Please select a valid donation amount');
      setIsLoading(false);
      return;
    }

    // Validate payment method specific fields
    if (paymentMethod === 'card') {
      if (!formData.cardNumber || !formData.expiryDate || !formData.cvv || !formData.nameOnCard) {
        alert('Please fill in all credit card details');
        setIsLoading(false);
        return;
      }
    } else if (paymentMethod === 'mobile') {
      if (!formData.mobileNumber) {
        alert('Please enter your mobile number');
        setIsLoading(false);
        return;
      }
    }

    // Simulate payment processing
    console.log('Payment Details:', {
      amount: donationAmount,
      paymentMethod,
      ...formData
    });

    // Show success message
    setTimeout(() => {
      const method = paymentMethod === 'card' ? 'credit card' : 'mobile money';
      alert(`Thank you ${formData.firstName} for your generous donation of $${donationAmount}! Your ${method} payment has been processed successfully.`);
      setIsLoading(false);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        nameOnCard: '',
        mobileProvider: 'mtn',
        mobileNumber: ''
      });
      setDonationAmount(250);
      setCustomAmount('');
    }, 3000);
  };

  const handleCustomAmount = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value && !isNaN(value) && parseInt(value) > 0) {
      setDonationAmount(parseInt(value));
    }
  };

  const styles = {
    donationForm: {
      background: 'white',
      borderRadius: '10px',
      padding: '2rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      maxWidth: '500px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    },
    formHeader: {
      textAlign: 'center',
      marginBottom: '2rem'
    },
    formTitle: {
      color: '#e74c3c',
      marginBottom: '0.5rem',
      fontSize: '1.8rem',
      fontWeight: 'bold'
    },
    formSubtitle: {
      color: '#666',
      margin: 0,
      fontSize: '1.1rem'
    },
    amountSection: {
      marginBottom: '2rem'
    },
    sectionTitle: {
      marginBottom: '1rem',
      color: '#333',
      fontSize: '1.2rem',
      fontWeight: '600'
    },
    amountButtons: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '0.5rem',
      marginBottom: '1.5rem'
    },
    amountBtn: {
      padding: '12px',
      border: '2px solid #ddd',
      background: 'white',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
      fontSize: '1rem'
    },
    amountBtnSelected: {
      background: '#3498db',
      color: 'white',
      borderColor: '#3498db'
    },
    customAmount: {
      marginBottom: '1rem'
    },
    customLabel: {
      display: 'block',
      marginBottom: '0.5rem',
      color: '#666',
      fontWeight: '500'
    },
    customInput: {
      display: 'flex',
      alignItems: 'center',
      border: '2px solid #ddd',
      borderRadius: '5px',
      padding: '0 1rem',
      background: 'white'
    },
    dollarSign: {
      fontWeight: 'bold',
      marginRight: '0.5rem',
      color: '#333'
    },
    customInputField: {
      border: 'none',
      padding: '12px 0',
      width: '100%',
      outline: 'none',
      fontSize: '16px',
      background: 'transparent'
    },
    personalInfo: {
      marginBottom: '2rem'
    },
    paymentMethodSection: {
      marginBottom: '2rem'
    },
    paymentMethodButtons: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '1.5rem'
    },
    paymentMethodBtn: {
      flex: 1,
      padding: '12px',
      border: '2px solid #ddd',
      background: 'white',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
      fontSize: '1rem'
    },
    paymentMethodBtnSelected: {
      background: '#27ae60',
      color: 'white',
      borderColor: '#27ae60'
    },
    formRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem'
    },
    formGroup: {
      marginBottom: '1rem'
    },
    formLabel: {
      display: 'block',
      marginBottom: '0.5rem',
      color: '#333',
      fontWeight: '500',
      fontSize: '0.9rem'
    },
    required: {
      color: '#e74c3c'
    },
    formInput: {
      width: '100%',
      padding: '12px',
      border: '2px solid #ddd',
      borderRadius: '5px',
      fontSize: '16px',
      transition: 'border-color 0.3s ease',
      background: 'white',
      boxSizing: 'border-box'
    },
    formSelect: {
      width: '100%',
      padding: '12px',
      border: '2px solid #ddd',
      borderRadius: '5px',
      fontSize: '16px',
      background: 'white',
      boxSizing: 'border-box'
    },
    cardDetailsRow: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      gap: '1rem'
    },
    donateSubmitBtn: {
      width: '100%',
      background: '#e74c3c',
      color: 'white',
      border: 'none',
      padding: '15px',
      fontSize: '18px',
      fontWeight: 'bold',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
      marginBottom: '1rem'
    },
    donateSubmitBtnDisabled: {
      background: '#bdc3c7',
      cursor: 'not-allowed'
    },
    securityNotice: {
      textAlign: 'center',
      marginTop: '1rem',
      paddingTop: '1rem',
      borderTop: '1px solid #eee'
    },
    securityText: {
      color: '#27ae60',
      fontSize: '0.9rem',
      margin: 0
    },
    paymentInstructions: {
      background: '#f8f9fa',
      padding: '1rem',
      borderRadius: '5px',
      marginTop: '1rem',
      fontSize: '0.9rem',
      color: '#666'
    }
  };

  return (
    <div style={styles.donationForm}>
      <div style={styles.formHeader}>
        <h2 style={styles.formTitle}>Make a Donation</h2>
        <p style={styles.formSubtitle}>Your support provides essential care for orphaned children</p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Amount Selection */}
        <div style={styles.amountSection}>
          <h3 style={styles.sectionTitle}>Select Amount</h3>
          <div style={styles.amountButtons}>
            {presetAmounts.map((amount) => (
              <button
                key={amount}
                type="button"
                style={{
                  ...styles.amountBtn,
                  ...(donationAmount === amount ? styles.amountBtnSelected : {})
                }}
                onClick={() => {
                  setDonationAmount(amount);
                  setCustomAmount('');
                }}
              >
                ${amount}
              </button>
            ))}
          </div>
          
          <div style={styles.customAmount}>
            <label style={styles.customLabel}>Or enter custom amount:</label>
            <div style={styles.customInput}>
              <span style={styles.dollarSign}>$</span>
              <input
                type="number"
                value={customAmount}
                onChange={handleCustomAmount}
                placeholder="Other amount"
                min="1"
                style={styles.customInputField}
              />
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div style={styles.personalInfo}>
          <h3 style={styles.sectionTitle}>Your Information</h3>
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>
                First Name <span style={styles.required}>*</span>
              </label>
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required 
                style={styles.formInput}
                placeholder="John"
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>
                Last Name <span style={styles.required}>*</span>
              </label>
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required 
                style={styles.formInput}
                placeholder="Doe"
              />
            </div>
          </div>
          
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>
                Email Address <span style={styles.required}>*</span>
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required 
                style={styles.formInput}
                placeholder="john@example.com"
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>
                Phone Number
              </label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                style={styles.formInput}
                placeholder="+1234567890"
              />
            </div>
          </div>
        </div>

        {/* Payment Method Selection */}
        <div style={styles.paymentMethodSection}>
          <h3 style={styles.sectionTitle}>Payment Method</h3>
          <div style={styles.paymentMethodButtons}>
            <button
              type="button"
              style={{
                ...styles.paymentMethodBtn,
                ...(paymentMethod === 'card' ? styles.paymentMethodBtnSelected : {})
              }}
              onClick={() => setPaymentMethod('card')}
            >
              💳 Credit Card
            </button>
            <button
              type="button"
              style={{
                ...styles.paymentMethodBtn,
                ...(paymentMethod === 'mobile' ? styles.paymentMethodBtnSelected : {})
              }}
              onClick={() => setPaymentMethod('mobile')}
            >
              📱 Mobile Money
            </button>
          </div>

          {/* Credit Card Form */}
          {paymentMethod === 'card' && (
            <div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>
                  Name on Card <span style={styles.required}>*</span>
                </label>
                <input 
                  type="text" 
                  name="nameOnCard"
                  value={formData.nameOnCard}
                  onChange={handleInputChange}
                  required 
                  style={styles.formInput}
                  placeholder="JOHN DOE"
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>
                  Card Number <span style={styles.required}>*</span>
                </label>
                <input 
                  type="text" 
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleCardNumberChange}
                  required 
                  style={styles.formInput}
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                />
              </div>

              <div style={styles.cardDetailsRow}>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>
                    Expiry Date <span style={styles.required}>*</span>
                  </label>
                  <input 
                    type="text" 
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleExpiryDateChange}
                    required 
                    style={styles.formInput}
                    placeholder="MM/YY"
                    maxLength="5"
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>
                    CVV <span style={styles.required}>*</span>
                  </label>
                  <input 
                    type="text" 
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    required 
                    style={styles.formInput}
                    placeholder="123"
                    maxLength="4"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Mobile Money Form */}
          {paymentMethod === 'mobile' && (
            <div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>
                  Mobile Provider <span style={styles.required}>*</span>
                </label>
                <select 
                  name="mobileProvider"
                  value={formData.mobileProvider}
                  onChange={handleInputChange}
                  required 
                  style={styles.formSelect}
                >
                  {mobileProviders.map(provider => (
                    <option key={provider.value} value={provider.value}>
                      {provider.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>
                  Mobile Number <span style={styles.required}>*</span>
                </label>
                <input 
                  type="tel" 
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  required 
                  style={styles.formInput}
                  placeholder="07X XXX XXXX"
                />
              </div>

              <div style={styles.paymentInstructions}>
                <strong>How it works:</strong><br />
                1. Enter your mobile number above<br />
                2. Click "Donate" to proceed<br />
                3. You will receive a payment prompt on your phone<br />
                4. Confirm the payment to complete your donation
              </div>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          style={{
            ...styles.donateSubmitBtn,
            ...(isLoading ? styles.donateSubmitBtnDisabled : {})
          }}
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : `Donate $${donationAmount}`}
        </button>

        {/* Security Notice */}
        <div style={styles.securityNotice}>
          <p style={styles.securityText}>🔒 Your donation is secure and encrypted</p>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;