function showContactInfo() {
        var contactInfo = document.getElementById('contact-info');
        if (contactInfo.style.display === 'none' || contactInfo.style.display === '') {
        contactInfo.style.display = 'block';
        } else {
        contactInfo.style.display = 'none';
        }
        }

function toggleAboutInfo() {
         var aboutInfo = document.getElementById('about-info');
         if (aboutInfo.style.display === 'none' || aboutInfo.style.display === '') {
                aboutInfo.style.display = 'block';
         } else {
                aboutInfo.style.display = 'none';
         }
        }

