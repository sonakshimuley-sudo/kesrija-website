'use client';

import { useState, useEffect } from 'react';
// Change line 4 to exactly this:
import { supabase } from '../../lib/supabase';// Adjust this import based on your actual path

export default function Reviews({ productSlug }) {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // 1. Fetch reviews for the specific product
  const fetchReviews = async () => {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .eq('product', productSlug)
      .order('created_at', { ascending: false });

    if (!error && data) {
      setReviews(data);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [productSlug]);

  // 2. Submit a new review
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !comment) return alert('Please fill out all fields.');

    setSubmitting(true);

  const { error } = await supabase
  .from('reviews')
  .insert([
    {
      product: productSlug,
      name: name,
      rating: parseInt(rating),
      review: comment,
    },
  ]);

    setSubmitting(false);

    if (error) {
      alert('Error submitting review: ' + error.message);
    } else {
      setName('');
      setComment('');
      setRating(5);
      fetchReviews(); // Refresh list after submitting
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 p-8 rounded-3xl bg-[#F5EEE8] border-2 border-[#4A2C2A] shadow-xl">
      <h3 className="text-3xl font-bold mb-6 text-[#4A2C2A]">
        CUSTOMER REVIEWS
      </h3>

      <p className="text-[#4A2C2A] mb-6 italic">
  Your opinion matters. Share your experience and help us make KESRIJA even better.
</p>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-1 text-[#4A2C2A]">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-xl border-2 border-[#4A2C2A] bg-white text-[#4A2C2A]"
            placeholder="Share your thoughts about this product..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Rating</label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full p-3 rounded-xl border-2 border-[#4A2C2A] bg-white text-[#4A2C2A]"
          >
            {[5, 4, 3, 2, 1].map((num) => (
              <option key={num} value={num}>{num} Stars</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-[#4A2C2A]"></label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-3 rounded-xl border-2 border-[#4A2C2A] bg-white text-[#4A2C2A]"
            rows="3"
            placeholder="Share your thoughts about this product..."
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="px-6 py-3 bg-[#4A2C2A] text-white rounded-xl font-semibold hover:bg-[#3A2220] transition disabled:opacity-50"
        >
          {submitting ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>

      {/* Reviews Display List */}
      <div className="space-y-4">
        {reviews.length === 0 ? (
          <p className="text-stone-500 text-sm">No reviews yet. Be the first to review!</p>
        ) : (
          reviews.map((rev) => (
            <div
             key={rev.id}
            className="p-4 rounded-xl bg-[#F5EEE8] border border-[#4A2C2A] mb-3"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-stone-800">{rev.name}</span>
                <span className="text-amber-500">{'★'.repeat(rev.rating)}{'☆'.repeat(5 - rev.rating)}</span>
              </div>
              <p className="text-stone-600 text-sm">{rev.review}</p>
              <span className="text-xs text-stone-400">
                {new Date(rev.created_at).toLocaleDateString()}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}