import React, { useState, useEffect } from "react";

function GithubUser() {
  /********************************************
   *                 STATE                     *
   *  Store GitHub profile data                *
   ********************************************/
  const [profile, setProfile] = useState(null);

  /********************************************
   *                 EFFECT                    *
   *  Fetch data once on component mount       *
   ********************************************/
  useEffect(() => {
    fetch("https://api.github.com/users/github-john-doe")
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  /********************************************
   *                 LOADER                    *
   *  Show loading text while data is null     *
   ********************************************/
  if (!profile) return <div className="text-center pt-5">Chargement du profil GitHub...</div>;

  /********************************************
   *                 UTIL                      *
   *  Format ISO date to human-readable string *
   ********************************************/
  const formatDate = (dateString) => new Date(dateString).toLocaleDateString();

  /********************************************
   *                 DATA                     *
   *  Stats array to render dynamically       *
   ********************************************/
  const stats = [
    { label: "Followers", value: profile.followers },
    { label: "Following", value: profile.following },
    { label: "Created at", value: formatDate(profile.created_at) },
    { label: "Updated at", value: formatDate(profile.updated_at) },
  ];

  /********************************************
   *                 JSX                       *
   *  Main UI: profile avatar, name, stats     *
   ********************************************/
  return (
    <div className="container pt-5 mt-5 text-center">
      <h1>Profil GitHub de {profile.name}</h1>

      {/* Avatar */}
      <img
        src={profile.avatar_url}
        alt={profile.login}
        className="mx-auto d-block rounded-circle"
        style={{ width: "300px" }}
      />

      {/* Bio */}
      <p className="mt-4">{profile.bio}</p>

      {/* Stats */}
      {stats.map((stat, i) => (
        <p key={i}>
          {stat.label}: {stat.value}
        </p>
      ))}

      {/* Repositories link */}
      <p>
        Repos URL:{" "}
        <a href={profile.repos_url} target="_blank" rel="noopener noreferrer">
          {profile.repos_url} Voir les repositories GitHub
        </a>
      </p>
    </div>
  );
}

export default GithubUser;
