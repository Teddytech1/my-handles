   function sendMessage() {
        const name = document.getElementById('contact-name').value.trim();
        const message = document.getElementById('contact-message').value.trim();
        const email = document.getElementById('contact-email').value.trim();
	const phone = document.getElementById('contact-phone').value.trim();
        const subject = document.getElementById('contact-subject').value.trim();

        if (!name || !message || !email || !phone || !subject) {
            Swal.fire('Error', 'Ensure All Fields Are Filled!', 'error');
            return;
        }

        const text = `NEW PORTFOLIO CONTACT MESSAGE:\n\nName: ${name}\nEmail:${email}\nPhone: ${phone}\nSuject: ${subject}\nMessage: ${message}`;

        // Send the message to the server-side for processing
        fetch('/send-message', { // Use your server endpoint here
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: text
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                Swal.fire('Success', 'Message Sent Successfully!', 'success');
                document.getElementById('contact-name').value = '';
		document.getElementById('contact-subject').value = '';
                document.getElementById('contact-message').value = '';
                document.getElementById('contact-email').value = '';
                document.getElementById('contact-phone').value = '';
            } else {
                Swal.fire('Error', 'Failed to send message, please try again.', 'error');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire('Error', 'An error occurred, please try again.', 'error');
        });
      }
