import {useState, useEffect} from 'react';

import {loadFarmers} from '../services/loadData';

export default function useFarmers() {
  const [title, setTitle] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const farmers = loadFarmers();
    farmers.list.sort(
      /*
       * See the best rated and more close to you ;)
       */
      (farmer01, farmer02) => {
        let order;
        if (farmer01.stars === farmer02.stars) {
          order = farmer01.distance - farmer02.distance;
        } else {
          order = farmer02.stars - farmer01.stars;
        }

        return order;
      },
    );
    setTitle(farmers.title);
    setList(farmers.list);
  }, []);

  return [title, list];
}
