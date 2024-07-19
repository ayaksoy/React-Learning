import React from "react";

export default function Contact() {
	return (
		<div>
			<h1>Contact</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
				quia incidunt voluptatem itaque aut, vero, consequuntur ipsa labore
				ipsum repellendus facere dignissimos dicta odio. Corrupti nam dolorem
				distinctio hic pariatur.
			</p>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96098.05015953032!2d28.6148096!3d41.1767698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b557de4bf7924f%3A0x6a3c34b8bd03743!2sTamt%C3%BCrk%20Sitesi!5e0!3m2!1str!2str!4v1721394847627!5m2!1str!2str"
				width="600"
				height="450"
				style="border:0;"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
			<form>
				<label htmlFor="name">Name:</label>
				<input type="text" id="name" name="name" />
				<label htmlFor="email">Email:</label>
				<input type="email" id="email" name="email" />
				<label htmlFor="message">Message:</label>
				<textarea id="message" name="message"></textarea>
				

			</form>
		</div>
	);
}
