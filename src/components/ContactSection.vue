<template>
  <div class="section-11 mt-10 mb-3" id="contact">
    <div class="container mx-auto">
      <h1 class="text-center font-bold text-4xl">Lets Chat</h1>
      <h6 class="text-center text-primary font-bold">Hello, Murad?</h6>
      <form class="mx-8 md:mx-20 pt-8">
        <h1 class="font-bold text-center mb-3">Contact Form</h1>
        <div class="grid grid-cols-12 gap-4">
          <div class="input-container col-span-12 md:col-span-5">
            <label class="block text-dark mb-2" for="first-name">First Name</label>
            <input
              class="shadow appearance-none rounded w-full py-2 px-3 focus:ring-blue-500 focus:border-blue-500 text-gray-700 leading-tight focus:outline-none"
              id="first-name"
              type="text"
            />
          </div>
          <div class="input-container col-span-12 md:col-span-7">
            <!-- Second input field -->
            <label class="block text-dark mb-2" for="last-name">Last Name</label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="last-name"
              type="text"
            />
          </div>
          <div class="input-container col-span-12 md:col-span-5">
            <!-- Third input field -->
            <label class="block text-dark mb-2" for="email">Email</label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
            />
          </div>
          <div class="input-container col-span-12 md:col-span-7">
            <!-- Fourth input field -->
            <label class="block text-dark mb-2" for="phone">Phone</label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
            />
          </div>
          <div class="input-container col-span-12">
            <!-- Textarea -->
            <label class="block text-dark mb-2" for="message">Message</label>
            <textarea
              class="shadow appearance-none border rounded w-full py-7 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
            ></textarea>
          </div>
        </div>
        <button type="button" class="mt-2 px-5 py-1 btn-default">Send Message</button>
      </form>
    </div>
    <div class="text-center font-bold text-2xl mt-12 md:mt-3">Contact Details</div>
    <div
      class="contact-icons flex flex-row flex-wrap md:flex-nowrap justify-between md:mx-24 lg:mx-52 md:mt-8 lg:mt-4"
    >
      <div class="ms-4 flex items-center flex-col md:w-auto">
        <i aria-hidden="true" class="fas fa-phone"></i>
        <p class="text-primary font-bold pt-3">+971565533343</p>
      </div>
      <div class="md:ms-12 lg:ms-4 flex items-center flex-col md:w-auto">
        <i aria-hidden="true" class="far fa-envelope"></i>
        <p class="text-primary font-bold pt-3">hello@muradmurad.com</p>
      </div>
      <div class="lets-connect mt-5 md:mt-0 text-center md:text-left mx-auto md:mx-0">
        <h1 class="font-bold text-2xl">Let's Connect</h1>
        <div class="flex items-center justify-center md:justify-start mt-3">
          <div class="icon-container mx-1">
            <i class="fab fa-whatsapp"></i>
          </div>
          <div class="icon-container mx-1">
            <i class="fab fa-linkedin-in"></i>
          </div>
          <div class="icon-container mx-1">
            <i class="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
