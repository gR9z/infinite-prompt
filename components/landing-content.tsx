'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Jared',
    avatar: 'J',
    title: 'Ingénieur logiciel',
    desc: 'Cette application a révolutionné ma manière de travailler !',
  },
  {
    name: 'Sophie',
    avatar: 'S',
    title: 'Designer graphique',
    desc: 'Interface intuitive et résultats impressionnants. Un outil indispensable pour tout créatif.',
  },
  {
    name: 'Marc',
    avatar: 'M',
    title: 'Responsable marketing',
    desc: 'Gain de temps incroyable et amélioration de la productivité. Je recommande vivement cette application !',
  },
  {
    name: 'Léa',
    avatar: 'L',
    title: 'Développeuse web',
    desc: 'Facile à utiliser et extrêmement efficace. Elle a changé ma façon de coder.',
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Témoignages
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.desc} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">{item.desc}</CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
