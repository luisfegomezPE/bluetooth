bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        kitronik_servo_lite.forward()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_UP) {
        kitronik_servo_lite.stop()
    }
})
basic.showIcon(IconNames.Cow)
basic.forever(function () {
	
})
