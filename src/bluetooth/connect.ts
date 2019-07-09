import {BluetoothPuzzle} from "./bluetooth-puzzle";
import {debugLog} from "./debug";
import {ganConfig, GanCube} from "./gan";
import {giiKERConfig, GiiKERCube} from "./giiker";

/******** requestOptions ********/

export interface BluetoothConfig {
    filters: BluetoothRequestDeviceFilter[];
    optionalServices: BluetoothServiceUUID[];
}

function requestOptions(): RequestDeviceOptions {
  const options = {
      filters: [] as BluetoothRequestDeviceFilter[],
      optionalServices: [] as BluetoothServiceUUID[],
  };
  for (const config of [
      giiKERConfig,
      ganConfig,
  ]) {
      options.filters = options.filters.concat(config.filters);
      options.optionalServices = options.optionalServices.concat(config.optionalServices);
  }
  debugLog({requestOptions: options});
  return options;
}

/******** connect() ********/

// TODO: Debug options to allow connecting to any device?
export async function connect(): Promise<BluetoothPuzzle> {
  debugLog("Attempting to pair.");
  const device = await navigator.bluetooth.requestDevice(requestOptions());
  debugLog("Device:", device);

  if (typeof device.gatt === "undefined") {
      return Promise.reject("Device did not have a GATT server.");
  }

  const server = await device.gatt.connect();
  debugLog("Server:", server);

  // TODO by reading supported matched filters or provided services.
  if (server.device!.name!.substring(0, 3) === "GAN") {
    return await GanCube.connect(server);
  } else {
    return await GiiKERCube.connect(server);
  }
}
