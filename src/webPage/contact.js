function Contact(){
    return(
        <section class="contact" id="contact">
        <h2>Contact us for more info</h2>
        <form for="contact" >
            <div class="contact_outer">
            <div class="inner_contact">
            <label for="name">Name</label>
            <p><input placeholder="Enter your name" id="name" type="text" required/></p>
            
            <label for="email">Email</label>
            <p><input placeholder="Enter your email(optional)" id="email" type="email" /></p>
            
            </div>
            <div class="inner_contact"><label for="ph_num">Phone number</label>
                <p><input placeholder="Enter your phonenumber" id="ph_num" type="number" required/></p>
            <label for="sub">Subject</label>
            <p><input placeholder="Enter your subject (optional)" id="sub" type="text" /></p>
            
        </div>
    </div>
            <p class="text" ><label for="mess">Message</label><br/>
            <textarea placeholder="Type your message" id="mess" rows="20" cols="150" name="mess" ></textarea>
            </p>
        </form>
        <button>Submit</button>
    </section>
    )
}
export default Contact