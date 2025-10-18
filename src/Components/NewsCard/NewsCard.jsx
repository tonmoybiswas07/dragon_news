import React from "react";
import { FaStar, FaRegEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, rating, total_view } = news;

  return (
    <div className="card bg-base-100 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition mx-5 mb-3">
      {/* Author Section */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toISOString().split("T")[0]}
            </p>
          </div>
        </div>
        <button className="btn btn-ghost btn-sm text-gray-600">
          <FaShareAlt />
        </button>
      </div>

      {/* Title */}
      <div className="px-4">
        <h3 className="font-bold text-lg mb-2 leading-snug hover:text-blue-500 cursor-pointer">
          {title}
        </h3>
      </div>

      {/* Image */}
      <figure className="px-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-lg w-full h-52 object-cover"
        />
      </figure>

      {/* Details */}
      <div className="p-4 pt-3 text-gray-700 text-sm leading-relaxed">
        <p>
          {details.slice(0, 200)}...
          <Link
            to={`/news/${news.id}`}
            className="text-orange-500 font-semibold hover:underline ml-1"
          >
            Read More
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4 border-t pt-2 text-sm">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(Math.round(rating.number)).keys()].map((i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-600 font-medium ml-1">
            {rating.number.toFixed(1)}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center justify-center gap-1 text-gray-500">
          <FaRegEye className="text-lg" /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
