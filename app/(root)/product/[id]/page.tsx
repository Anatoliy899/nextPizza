import { Container } from '@/components/shared/container';
import { GroupVariants } from '@/components/shared/products/group-variants';
import { ProductImage } from '@/components/shared/products/product-image';
import { Title } from '@/components/shared/title';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
import React from 'react';

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) return notFound();

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <ProductImage imageUrl={product.imageUrl} size={40} />
        <div className="w-[490px] bg-[#f3f2f2] p-7">
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1"
          />

          <p className="text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
          </p>

          <GroupVariants
            items={[
              {
                name: 'Маленькая',
                value: '1',
              },
              {
                name: 'Средняя',
                value: '2',
              },
              {
                name: 'Большая',
                value: '3',
              },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
