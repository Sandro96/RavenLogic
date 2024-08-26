
import './Contact.css';

const Contact: React.FC = () => {
  return (
   <div className="container pt-10">	
    <form>
      <div className="space-y-12">
        <div className="border-b border-white-900/10 pb-12">
          <h1 className="text-base font-semibold leading-7 text-white-900">Contact us</h1>
          <p className="mt-1 text-sm leading-6 text-white-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-white-900">
                Email
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
		<input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block flex-1 border-0 bg-transparent py-1.5 px-1 text-white-900 placeholder:text-white-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-white-900">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block bg-transparent w-full rounded-md border-0 py-1.5 px-1 text-white-900 shadow-sm ring-1 ring-inset ring-white-300 placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
		  placeholder="Why you contact us"
                ></textarea>
              </div>
              <p className="mt-3 text-sm leading-6 text-white-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="col-span-full">
              <div className="flex items-center gap-x-3">
                <button
                  type="button"
                  className="rounded-md px-2.5 py-1.5 text-sm font-semibold shadow-sm"
                >
                 Send 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
   </div>
  );
};

export default Contact;




