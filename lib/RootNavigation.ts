import { createNavigationContainerRef } from '@react-navigation/native';

export const navigation_container_ref = createNavigationContainerRef();

export function navigate<T extends { [key: string]: any }>(
  name: string,
  params: T,
) {
  if (navigation_container_ref.isReady()) {
    //NOTE: (teddy) Spooky stuff
    navigation_container_ref.navigate(name as never, params as never);
  }
}

export function go_back() {
  if (navigation_container_ref.isReady()) {
    navigation_container_ref.goBack();
  }
}
