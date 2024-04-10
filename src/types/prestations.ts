interface Prestation {
  title: string;
  text: string;
  subPart: SubPart[];
}

interface SubPart {
  title?: string;
  items: SubPartItem[];
}

interface SubPartItem {
  item: string;
  tooltip?: string;
}
