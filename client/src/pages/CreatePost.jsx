import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {};

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-cBlack text-[32px]">Create</h1>
        <p className="mt-2 text-cGray text-[16px] max-w-[500px]">
          Create imaginative and visually stunning images through DALL-E AI and share them with the community
        </p>
      </div>
      <form action="" className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your Name"
            type="text" name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Promp"
            type="text"
            name="prompt"
            placeholder="a stained glass window depicting a hamburger and french fries"
            value={form.prompt}
            handleChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
