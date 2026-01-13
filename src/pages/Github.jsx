import { useEffect, useState } from "react";

const GithubProfile = ({ username = "nishant-jha72" }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]);

  return (
<section className="w-full bg-gray-50 pt-28 pb-16">      {/* HEADER */}
      <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">
        My GitHub Profile
      </h1>

      {/* STATES */}
      {loading && (
        <div className="text-center text-gray-500">
          Loading GitHub profile...
        </div>
      )}

      {error && (
        <div className="text-center text-red-500">
          Unable to load GitHub profile.
        </div>
      )}

      {/* PROFILE CARD */}
      {profile && !loading && !error && (
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center">

            {/* Avatar */}
            <img
              src={profile.avatar_url}
              alt="GitHub Avatar"
              className="w-32 h-32 rounded-full mx-auto mb-4 border"
            />

            {/* Name */}
            <h2 className="text-2xl font-bold text-gray-900">
              {profile.name || profile.login}
            </h2>

            {/* Username */}
            <p className="text-gray-500 mb-3">@{profile.login}</p>

            {/* Bio */}
            {profile.bio && (
              <p className="text-gray-600 text-sm mb-4">
                {profile.bio}
              </p>
            )}

            {/* Stats */}
            <div className="flex justify-around text-sm text-gray-700 mb-6">
              <div>
                <p className="font-semibold">{profile.followers}</p>
                <p>Followers</p>
              </div>
              <div>
                <p className="font-semibold">{profile.following}</p>
                <p>Following</p>
              </div>
              <div>
                <p className="font-semibold">{profile.public_repos}</p>
                <p>Repos</p>
              </div>
            </div>

            {/* GitHub Link */}
            <a
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              View GitHub Profile
            </a>

          </div>
        </div>
      )}
    </section>
  );
};

export default GithubProfile;
