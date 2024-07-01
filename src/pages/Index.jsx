import { Button } from "@/components/ui/button";

function Index() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      {/* Update with components here - default to put new layout sections as separate components in the components folder, and import them here */}
      <section className="text-center py-20 bg-gray-100">
        <h1 className="text-5xl font-bold mb-4">Welcome to SaaS App</h1>
        <p className="text-xl mb-8">The best solution for your business needs</p>
        <Button variant="primary" size="lg">Get Started</Button>
      </section>
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Feature One</h3>
            <p className="text-gray-700">Description of feature one.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Feature Two</h3>
            <p className="text-gray-700">Description of feature two.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Feature Three</h3>
            <p className="text-gray-700">Description of feature three.</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold mb-4">Basic</h3>
            <p className="text-gray-700 mb-4">$10/month</p>
            <Button variant="secondary">Choose Plan</Button>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold mb-4">Standard</h3>
            <p className="text-gray-700 mb-4">$20/month</p>
            <Button variant="secondary">Choose Plan</Button>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold mb-4">Premium</h3>
            <p className="text-gray-700 mb-4">$30/month</p>
            <Button variant="secondary">Choose Plan</Button>
          </div>
        </div>
      </section>
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
            <input type="text" id="name" className="w-full p-3 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input type="email" id="email" className="w-full p-3 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
            <textarea id="message" className="w-full p-3 border rounded-lg"></textarea>
          </div>
          <Button variant="primary" size="lg">Send Message</Button>
        </form>
      </section>
    </main>
  );
}

export default Index;