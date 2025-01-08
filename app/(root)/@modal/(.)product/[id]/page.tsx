import { Container } from '@/shared/components/shared/container';
import { ChooseProductModal } from '@/shared/components/shared/modals/choose-product-modal';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
import React from 'react';

export default async function ProductModalPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      ingredients: true,
      items: true,
    },
  });

  if (!product) return notFound();
  return <ChooseProductModal product={product} />;
}
