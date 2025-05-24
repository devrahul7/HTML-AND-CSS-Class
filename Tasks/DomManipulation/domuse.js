        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const contact = document.getElementById('contact').value;
            const address = document.getElementById('address').value;
            
            document.getElementById('displayName').textContent = name;
            document.getElementById('displayEmail').textContent = email;
            document.getElementById('displayContact').textContent = contact;
            document.getElementById('displayAddress').textContent = address;
            
            document.getElementById('submittedData').style.display = 'block';
            
            const detailsParagraph = `Name: ${name}\nEmail: ${email}\nContact: ${contact}\nAddress: ${address}`;
            document.getElementById('detailsParagraph').textContent = detailsParagraph;
        });
        
        function showMoreInfo() {
            document.getElementById('additionalInfo').style.display = 'block';
        }