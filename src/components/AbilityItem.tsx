import { useEffect, useState } from 'react';

interface Props {
  name: string;
}

export const AbilityItem: React.FC<Props> = ({ name }) => {
  const [ability, setAbility] = useState('');

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/ability/${name}`)
      .then((response) => response.json())
      .then((res: Ability) => {
        const { name } = res.names.find((name) => name.language.name === 'en');
        return setAbility(name);
      });
  }, [ability, name]);

  return <li>{ability}</li>;
};
