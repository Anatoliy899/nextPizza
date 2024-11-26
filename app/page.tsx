import Image from 'next/image';
import { Container } from '@/components/shared/container';
import { Title } from '@/components/shared/title';
import { TopBar } from '@/components/shared/top-bar';
import { Filters } from '@/components/shared/filters';
import { ProductsGroupList } from '@/components/shared/products-group-list';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 2,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 3,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 4,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 5,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 500 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 111,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 112,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 113,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 114,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 115,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 116,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 117,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 118,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 119,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 120,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 121,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 500 }],
                  },
                ]}
                categoryId={2}
              />
              <ProductsGroupList
                title="Закуски"
                items={[
                  {
                    id: 30,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 32,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 33,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 34,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 35,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 36,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 500 }],
                  },
                  {
                    id: 37,
                    name: 'Маргарита',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 500 }],
                  },
                ]}
                categoryId={3}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
