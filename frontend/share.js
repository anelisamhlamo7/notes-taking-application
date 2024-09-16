// function shareViaEmail() {
//     const content = quill.root.innerHTML; // Get content from the editor
//     const subject = encodeURIComponent("Shared Note");
//     const body = encodeURIComponent(content);
//     window.location.href = `mailto:?subject=${subject}&body=${body}`;
//   }
  
//   function shareViaWhatsApp() {
//     const content = quill.root.innerHTML; // Get content from the editor
//     const message = encodeURIComponent(content);
//     const url = `https://api.whatsapp.com/send?text=${message}`;
//     window.open(url, '_blank');
//   }
  

//   function shareViaEmail() {
//     const content = quill.root.innerHTML; // Get content from the editor
//     const subject = encodeURIComponent("Shared Note");
//     // Use `content` directly instead of `encodeURIComponent` to handle HTML content correctly
//     const body = encodeURIComponent(content.replace(/<\/?[^>]+(>|$)/g, "")); // Strip HTML tags for plain text content

//     // Use a mailto link to open the default email client
//     window.location.href = `mailto:?subject=${subject}&body=${body}`;
// }

// function shareViaWhatsApp() {
//     const content = quill.root.innerHTML; // Get content from the editor
//     const message = encodeURIComponent(content.replace(/<\/?[^>]+(>|$)/g, "")); // Strip HTML tags for plain text content
//     const url = `https://api.whatsapp.com/send?text=${message}`;
//     window.open(url, '_blank');
// }


function shareViaEmail() {
    const content = quill.root.innerHTML; // Get content from the editor

    // Remove HTML tags for email body
    const plainTextContent = content.replace(/<\/?[^>]+(>|$)/g, "").trim();
    const subject = encodeURIComponent("Shared Note");
    const body = encodeURIComponent(plainTextContent);

    // Ensure mailto link format is correct
    const mailtoLink = `mailto:?subject=${subject}&body=${body}`;

    // Debugging output
    console.log("Mailto link:", mailtoLink);

    // Open the default email client
    window.location.href = mailtoLink;
}

// Example test for a share via WhatsApp
function shareViaWhatsApp() {
    const content = quill.root.innerHTML; // Get content from the editor

    // Remove HTML tags for WhatsApp message
    const plainTextContent = content.replace(/<\/?[^>]+(>|$)/g, "").trim();
    const message = encodeURIComponent(plainTextContent);
    const url = `https://api.whatsapp.com/send?text=${message}`;

    // Debugging output
    console.log("WhatsApp URL:", url);

    // Open WhatsApp
    window.open(url, '_blank');
}
