import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/app/components/DataTable';
import PageTitle from '@/app/components/ui/PageTitle';
import AddTransportButton from '@/app/components/buttons/AddTransportButton';

type Props = {};

type Transport = {
  number: number;
  name: string;
  address: string;
  projectChiefName: string;
  vatTax: string;
  email: string;
  panVatNumber: string;
};

const columns: ColumnDef<Transport>[] = [
  {
    accessorKey: 'number',
    header: 'Number',
  },
  {
    accessorKey: 'name',
    header: 'Transport Name',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'projectChiefName',
    header: 'Project Chief Name',
  },
  {
    accessorKey: 'vatTax',
    header: 'VAT/Tax',
  },
  {
    accessorKey: 'email',
    header: 'Email ID',
  },
  {
    accessorKey: 'panVatNumber',
    header: 'PAN/VAT Number',
  },
];

const data: Transport[] = [
  {
    number: 1,
    name: 'Prabin Dai',
    address: '123 Main St',
    projectChiefName: 'Alice Johnson',
    vatTax: '123456789',
    email: 'john@example.com',
    panVatNumber: 'ABC123XYZ',
  },
  {
    number: 2,
    name: 'Jane Smith',
    address: '456 Elm St',
    projectChiefName: 'Bob Williams',
    vatTax: '987654321',
    email: 'jane@example.com',
    panVatNumber: 'XYZ456ABC',
  },
  // Add more entries here
  {
    number: 3,
    name: 'Michael Johnson',
    address: '789 Oak St',
    projectChiefName: 'Emma Davis',
    vatTax: '456123789',
    email: 'michael@example.com',
    panVatNumber: 'DEF789GHI',
  },
  {
    number: 4,
    name: 'Sarah Brown',
    address: '101 Pine St',
    projectChiefName: 'David Wilson',
    vatTax: '987654321',
    email: 'sarah@example.com',
    panVatNumber: 'GHI789JKL',
  },
  // Add more entries here
  {
    number: 5,
    name: 'Chris Lee',
    address: '202 Maple St',
    projectChiefName: 'Sophia Taylor',
    vatTax: '456123789',
    email: 'chris@example.com',
    panVatNumber: 'MNO123PQR',
  },
  {
    number: 1,
    name: 'John Doe',
    address: '123 Main St',
    projectChiefName: 'Alice Johnson',
    vatTax: '123456789',
    email: 'john@example.com',
    panVatNumber: 'ABC123XYZ',
  },
  {
    number: 2,
    name: 'Jane Smith',
    address: '456 Elm St',
    projectChiefName: 'Bob Williams',
    vatTax: '987654321',
    email: 'jane@example.com',
    panVatNumber: 'XYZ456ABC',
  },
  // Add more entries here
  {
    number: 3,
    name: 'Michael Johnson',
    address: '789 Oak St',
    projectChiefName: 'Emma Davis',
    vatTax: '456123789',
    email: 'michael@example.com',
    panVatNumber: 'DEF789GHI',
  },
  {
    number: 4,
    name: 'Sarah Brown',
    address: '101 Pine St',
    projectChiefName: 'David Wilson',
    vatTax: '987654321',
    email: 'sarah@example.com',
    panVatNumber: 'GHI789JKL',
  },
  // Add more entries here
  {
    number: 5,
    name: 'Chris Lee',
    address: '202 Maple St',
    projectChiefName: 'Sophia Taylor',
    vatTax: '456123789',
    email: 'chris@example.com',
    panVatNumber: 'MNO123PQR',
  },
  {
    number: 6,
    name: 'Emily Brown',
    address: '303 Cedar St',
    projectChiefName: 'James Anderson',
    vatTax: '987654321',
    email: 'emily@example.com',
    panVatNumber: 'PQR789STU',
  },
  // Add more entries here
  {
    number: 7,
    name: 'Daniel Garcia',
    address: '404 Walnut St',
    projectChiefName: 'Olivia Martinez',
    vatTax: '456123789',
    email: 'daniel@example.com',
    panVatNumber: 'STU123VWX',

    
  },
  {
    number: 8,
    name: 'Sophia Wilson',
    address: '505 Oak St',
    projectChiefName: 'Michael Johnson',
    vatTax: '987654321',
    email: 'sophia@example.com',
    panVatNumber: 'VWX789YZA',
  },
  // Add more Transport data objects as needed
];

const UsersPage: React.FC<Props> = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
    <div className="flex items-center justify-between">
      <PageTitle title="Transport" />
      <AddTransportButton />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-5 w-full">
      <DataTable columns={columns} data={data} />
    </div>
  </div>
  
  );
};

export default UsersPage;