// outside of a Vue file
import { Notify } from 'quasar'

export function basicMsg (msg, icon, color, pos, ms) {
    Notify.create({
        message: msg,
        icon: icon,
        color: color,
        position: pos,
        timeout: ms,
        actions: [{
                label: 'Okay',
                color: 'white'
            }
        ]
    })
}
