/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface Props {
  [key: string]: any;
}

class Component<T extends Props> {
  constructor(public props: T) {}
}

interface PageProps extends Props {
  title: string;
}

class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
