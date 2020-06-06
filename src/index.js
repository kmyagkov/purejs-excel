import Excel from '@/components/excel';
import Header from '@/components/header';
import Toolbar from '@/components/toolbar';
import Formula from '@/components/formula';
import Table from '@/components/Table';

import '@/assets/styles';

const excel = new Excel('#app', {
  components: [
    Header,
    Toolbar,
    Formula,
    Table,
  ],
});

excel.render();
