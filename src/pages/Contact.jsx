import React from 'react';
import { CheckCircle2, Mail, MapPin, Phone, X } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState('idle');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || 'Unable to send your message right now.');
      }

      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="pt-36 pb-16 md:pt-44">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-slate-950 dark:text-white">Get in Touch</h1>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-slate-600 dark:text-gray-300">
          Have a product idea, web app, mobile screen, or frontend challenge? Let's connect and turn it into a polished experience.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-6 text-slate-950 dark:text-white">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-500 dark:text-blue-400" size={24} />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-slate-600 dark:text-gray-300">tayyab90m@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-blue-500 dark:text-blue-400" size={24} />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-slate-600 dark:text-gray-300">+92 (307) 6160255</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-blue-500 dark:text-blue-400" size={24} />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-slate-600 dark:text-gray-300">Lahore, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 dark:border-white/10 dark:bg-white/5 dark:shadow-black/20"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-slate-100 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-slate-100 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-slate-100 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              disabled={submitStatus === 'submitting'}
              className="w-full bg-blue-500 hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-400 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus === 'error' && (
              <p className="rounded-lg bg-red-500/10 px-4 py-3 text-sm font-medium text-red-600 dark:text-red-300">
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
          <div className="relative max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl dark:bg-gray-900">
            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white"
              aria-label="Close success message"
            >
              <X size={20} />
            </button>
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-600">
              <CheckCircle2 size={38} />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-slate-950 dark:text-white">Thanks for reaching out!</h2>
            <p className="text-slate-600 dark:text-gray-300">
              I have received your message and will get back to you as soon as possible.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Contact;