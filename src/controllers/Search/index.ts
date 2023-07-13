const data = require("../../data/products.json");

// type productProps = { name: string; category: string };

const search = (text) => {
  let find = data.product.filter((el) => {
    const searching = text.split(" ");
    let include = false;
    for (let i = 0; i < searching.length; i++) {
      include = el.name.includes(searching[i]);
    }
    return include;
  });
  let recomm = find.map((el) => recommended(el));
  return {
    results: find,
    recommended: recomm,
  };
};

const recommended = (item) => {
  let find = data.product.filter(
    (el) => el.category === item.category && el.name !== item.name
  );
  return find.slice(0, 2);
};

module.exports = search;
