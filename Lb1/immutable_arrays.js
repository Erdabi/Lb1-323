const users = [
    { id: 1, name: "yusuf" },
    { id: 2, name: "ilja" },
    { id: 3, name: "boran" },
    { id: 4, name: "shanthosh" }
  ];

  console.log(users[2].name);

  const updatedUsers = [...users, { id: 5, name: "lars" }];

console.log(updatedUsers[4].name);


const updatedUsers2 = users.map(user => {
    if (user.id === 2) {
      return { ...user, name: "hassan" };
    }
    return user;
  });

  console.log(updatedUsers2[1].name);

  const minId = Math.min(...users.map(user => user.id));

  const updatedUsers3 = users.filter(user => user.id !== minId);

  console.log(updatedUsers3[0]);

  const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

  const sum = reviews.reduce((total, current) => total + current, 0);
    const average = sum / reviews.length;

    console.log(average);


    function groupAndCountReviews(reviews) {
        return reviews.reduce((result, current) => {
          if (current >= 4) {
            result.good++;
          } else if (current >= 2.5) {
            result.ok++;
          } else {
            result.bad++;
          }
          return result;
        }, { good: 0, ok: 0, bad: 0 });
      }
      
      const groupedReviews = groupAndCountReviews(reviews);

      console.log(groupedReviews);